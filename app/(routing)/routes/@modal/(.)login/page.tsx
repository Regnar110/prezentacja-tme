'use client';

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import './loginModal.css';
import {LoginForm} from "@/components/ui/loginForm";

export default function LoginModal() {
    const router = useRouter()

    const dialogRef = useCallback((node: HTMLDialogElement) => {
        if (node) {
            node.showModal();
        }
    }, []);


    return (
        <dialog className={'dialog'} ref={dialogRef} onClose={() => router.back()}>
            <LoginForm />
        </dialog>
    )
}