'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu"
import { cn } from "@/lib/util";
import Link from "next/link";

function Navbar({ className }: { className?: string }){
    const [active, setActive] = useState<string | null>(null);

    return(
        <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 font-bold ", className)}
        >
            <div>
                <Menu setActive={setActive}>
                <Link href={"/"}>
                <MenuItem setActive={setActive} active={active}
                item="Home">
                    
                </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active}
                item="About">
                    
                </MenuItem>


                <MenuItem setActive={setActive} active={active}
                item="Projects">
                    <div className="flex flex-col gap-4 text-sm mt-4">
                    <HoveredLink href="/QuikC'mte">QuickC'mte</HoveredLink>
                    </div>
                    <div className="flex flex-col gap-4 text-sm mt-4">
                    <HoveredLink href="/VocalScribe">VocalScribe</HoveredLink>
                    </div>
                    <div className="flex flex-col gap-4 text-sm mt-4">
                    <HoveredLink href="/SoilPredictor">SoilPredictor</HoveredLink>
                    </div>
                    <div className="flex flex-col gap-4 text-sm     mt-4">
                    <HoveredLink href="/BookBot">BookBot</HoveredLink>
                    </div>
                    <div className="flex flex-col gap-4 text-sm mt-4">
                    <HoveredLink href="/Game">Game</HoveredLink>
                    </div>
                </MenuItem>
                <Link href={"/contact"}>
                <MenuItem setActive={setActive} active={active}
                item="Contact">
                    
                </MenuItem>
                </Link>


            </Menu>
            </div>

            
        </div>
    )
}

export default Navbar;