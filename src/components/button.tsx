import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  children: React.ReactNode
}

type ButtonTextProps = {
  children: React.ReactNode

}

type ButtonIconProps = {
  children: React.ReactNode
}

function Button({ children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...rest}
      className="h-12 bg-lime-400 rounded-md items-center justify-center flex-row"
    >
      {children}
    </TouchableOpacity>
  )
}


function ButtonText({ children }: ButtonTextProps) {
  return (
    <Text
      className="text-black font-heading text-base mx-2"
    >
      {children}
    </Text>
  )
}


function ButtonIcon({ children }: ButtonIconProps) {
  return children
}

Button.Text = ButtonText
Button.Icon = ButtonIcon

export { Button }