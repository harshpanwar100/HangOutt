import { supabase } from "utils/supabase";

export const createEvent = async ({
  title,
  description,
  timing,
  endTime,
  latitude,
  longitude,
  userId
}) => {
  const { data, error } = await supabase
    .from("events")
    .insert([
      {
        title,
        description,
        start_time: timing,
        end_time: endTime,
        longitude,
        latitude,
        created_by: userId
      }
    ]);
  if (error) throw error;
  return data;
}
