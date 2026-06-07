import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/health_journal";

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Schemas
const journalEntrySchema = new mongoose.Schema(
  {
    day: String,
    date: String,
    mood: String,
    water: Number,
    workout: String,
    workoutDuration: Number,
    affirmation: String,
    notes: String,
    stickers: [
      {
        id: String,
        content: String,
        type: String,
        position: {
          x: Number,
          y: Number,
        },
      },
    ],
  },
  { timestamps: true },
);

const stickerSchema = new mongoose.Schema(
  {
    id: String,
    content: String,
    type: String,
    color: String,
    position: {
      x: Number,
      y: Number,
    },
    day: String,
  },
  { timestamps: true },
);

const JournalEntry = mongoose.model("JournalEntry", journalEntrySchema);
const Sticker = mongoose.model("Sticker", stickerSchema);

// Routes

// Get all journal entries
app.get("/api/journal", async (req, res) => {
  try {
    const entries = await JournalEntry.find().sort({ createdAt: -1 });
    res.json(entries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get specific day
app.get("/api/journal/:day", async (req, res) => {
  try {
    const entry = await JournalEntry.findOne({ day: req.params.day });
    res.json(entry || {});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new journal entry
app.post("/api/journal", async (req, res) => {
  try {
    const entry = new JournalEntry(req.body);
    await entry.save();
    res.json(entry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update journal entry for specific day
app.put("/api/journal/:day", async (req, res) => {
  try {
    const entry = await JournalEntry.findOneAndUpdate(
      { day: req.params.day },
      req.body,
      { new: true, upsert: true },
    );
    res.json(entry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all stickers for a day
app.get("/api/stickers/:day", async (req, res) => {
  try {
    const stickers = await Sticker.find({ day: req.params.day });
    res.json(stickers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add sticker
app.post("/api/stickers", async (req, res) => {
  try {
    const sticker = new Sticker(req.body);
    await sticker.save();
    res.json(sticker);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update sticker position
app.put("/api/stickers/:id", async (req, res) => {
  try {
    const sticker = await Sticker.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(sticker);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete sticker
app.delete("/api/stickers/:id", async (req, res) => {
  try {
    await Sticker.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
