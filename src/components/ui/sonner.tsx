import { useEffect, useState } from 'react'
import { Toaster as Sonner } from "sonner"

// Define theme type
type Theme = 'dark' | 'light' | 'system'

// Define props type
type ToasterProps = React.ComponentProps<typeof Sonner>

// Create a simple theme hook for Vite
const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('system')

  useEffect(() => {
    // Check system preference
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      document.documentElement.setAttribute('data-theme', systemTheme)
    } else {
      document.documentElement.setAttribute('data-theme', theme)
    }
  }, [theme])

  return { theme, setTheme }
}

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }


