export function Footer() {
  return (
    <footer className="border-t bg-muted/40 py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          © 2024 Loke Weng Yan. All Rights Reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/cathyloke"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          <a
            href="mailto:catloke963@gmail.com"
            className="font-medium underline underline-offset-4"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
