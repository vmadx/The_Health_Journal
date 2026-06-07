import { createContext, useState, useCallback } from "react";
import axios from "axios";

export const JournalContext = createContext();

const days = [
  { label: "MON", date: "20", color: "#f8b4c4" },
  { label: "TUE", date: "21", color: "#ffc9a8" },
  { label: "WED", date: "22", color: "#ffe9a0" },
  { label: "THU", date: "23", color: "#b8e8d0" },
  { label: "FRI", date: "24", color: "#a8e8e0" },
  { label: "SAT", date: "25", color: "#b8d4ff" },
  { label: "SUN", date: "26", color: "#d4c4f8" },
];

export function JournalProvider({ children }) {
  const [selectedDay, setSelectedDay] = useState("SUN");
  const [journalData, setJournalData] = useState({});
  const [stickers, setStickers] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

  const fetchJournalData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/journal`);
      setJournalData(response.data);
    } catch (error) {
      console.error("Failed to fetch journal data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const saveJournalData = useCallback(async (data) => {
    try {
      const response = await axios.post(`${API_URL}/journal`, data);
      setJournalData(response.data);
      return response.data;
    } catch (error) {
      console.error("Failed to save journal data:", error);
    }
  }, []);

  const updateDayData = useCallback(async (day, data) => {
    try {
      const response = await axios.put(`${API_URL}/journal/${day}`, data);
      setJournalData((prev) => ({
        ...prev,
        [day]: response.data,
      }));
      return response.data;
    } catch (error) {
      console.error("Failed to update day data:", error);
    }
  }, []);

  const addSticker = useCallback(async (sticker) => {
    try {
      const response = await axios.post(`${API_URL}/stickers`, sticker);
      setStickers((prev) => [...prev, response.data]);
      return response.data;
    } catch (error) {
      console.error("Failed to add sticker:", error);
    }
  }, []);

  const updateStickerPosition = useCallback(
    async (stickerId, position, day) => {
      try {
        const response = await axios.put(`${API_URL}/stickers/${stickerId}`, {
          position,
          day,
        });
        return response.data;
      } catch (error) {
        console.error("Failed to update sticker position:", error);
      }
    },
    [],
  );

  return (
    <JournalContext.Provider
      value={{
        selectedDay,
        setSelectedDay,
        journalData,
        setJournalData,
        stickers,
        setStickers,
        loading,
        days,
        fetchJournalData,
        saveJournalData,
        updateDayData,
        addSticker,
        updateStickerPosition,
      }}
    >
      {children}
    </JournalContext.Provider>
  );
}
