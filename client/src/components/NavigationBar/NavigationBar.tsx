import React from "react";

interface NavigationBarProps {
    selectedChatId: string
    setSelectedChatId: (value: string) => void
}

export const NavigationBar = ({selectedChatId, setSelectedChatId}: NavigationBarProps) => {
    return <div className='Navigation-Sidebar'>
    </div>
}