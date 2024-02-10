import { TextInput, TextInputProps } from "react-native";
import colors from "tailwindcss/colors";

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      className="h-32 bg-slate-800 px-4 py-3 text-sm text-white font-body rounded-md"
      multiline
      textAlignVertical="top"
      placeholderTextColor={colors.slate[400]} {...rest}
    />
  )
}