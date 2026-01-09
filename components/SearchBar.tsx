import React, { useState } from "react";
import { TextInput, View } from "react-native";

export const SearchBar = () => {
  const [query, setQuery] = useState("");
  const handleChange = (text) => {
    setQuery(text);
  };
  return (
    <View>
      <TextInput
        className=" items-center justify-center pt-3 pb-4 px-7 text-2xl rounded-full bg-white/20 color-white border-[1px] border-white font-bold"
        placeholder="search events, music, parties, sports...."
        value={query}
        onChangeText={handleChange}
        clearButtonMode="while-editing"
      />
    </View>
  );
};
