"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";

export const MobileSidebar = () => {



    return (
        <Sheet>
            <Button asChild variant="ghost" size="icon" className="md:hidden">
                <SheetTrigger>
                    <Menu />
                </SheetTrigger>
            </Button>

            <SheetContent side="left" className="p-0">
                <Sidebar />
            </SheetContent>
        </Sheet>
    );
};