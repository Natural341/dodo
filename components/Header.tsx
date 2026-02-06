"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="canwear logo"
              width={200}
              height={200}
              className="w-[200px] h-[200px] object-contain -my-16"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <Link
              href="#products"
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              Ürünler
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              Özellikler
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              Hakkımızda
            </Link>
          </nav>

          {/* Account, Theme, Cart & Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-4 ml-auto">
            {/* Account */}
            <button className="hidden sm:flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              Hesabım
            </button>



            {/* Cart */}
            <button className="relative p-2 hover:bg-border/50 rounded-full transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 bg-foreground text-background text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-border/50 rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="#products"
                className="text-sm font-medium text-muted hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Ürünler
              </Link>
              <Link
                href="#features"
                className="text-sm font-medium text-muted hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Özellikler
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium text-muted hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımızda
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
