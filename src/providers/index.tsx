import { ReactNode } from "react"
import ToastProvider from "./toast.provider"
import ScrollProvider from "@/contexts/ScrollContext"

const AppProvider = ({ children }: { children: ReactNode }) => {
    return (
        <ScrollProvider>
            <ToastProvider>
                {children}
            </ToastProvider>
        </ScrollProvider>
    )
}

export default AppProvider