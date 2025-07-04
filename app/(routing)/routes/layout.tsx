import { ReactNode } from "react";

export default function RoutesLayout({ children, modal }: { children: ReactNode, modal: ReactNode }) {
    return (
        <>
            {children}
            {modal}
        </>
    )
}
