import { useState } from "react";
import { Settings2, Volume2, Eye, Type, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useGame } from "@/context/GameContext";

export function AccessibilityPanel() {
  const { state, dispatch } = useGame();
  const { accessibility } = state;
  const [open, setOpen] = useState(false);

  const fontSizes = [
    { value: "sm" as const, label: "Pequena (14px)" },
    { value: "md" as const, label: "Normal (16px)" },
    { value: "lg" as const, label: "Grande (18px)" },
    { value: "xl" as const, label: "Muito Grande (20px)" },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Abrir painel de acessibilidade"
          className="size-9"
        >
          <Settings2 className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 p-6 sm:max-w-sm">
        <SheetHeader className="p-0">
          <SheetTitle className="flex items-center gap-2">
            <Eye className="size-4" />
            Acessibilidade
          </SheetTitle>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* Font size */}
          <div className="space-y-3">
            <Label className="text-sm font-semibold flex items-center gap-2">
              <Type className="size-4" />
              Tamanho da fonte
            </Label>
            <div className="grid grid-cols-2 gap-2">
              {fontSizes.map((fs) => (
                <Button
                  key={fs.value}
                  variant={
                    accessibility.fontSize === fs.value ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() =>
                    dispatch({ type: "SET_FONT_SIZE", size: fs.value })
                  }
                  className="text-xs"
                  aria-pressed={accessibility.fontSize === fs.value}
                >
                  {fs.label}
                </Button>
              ))}
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const sizes = ["sm", "md", "lg", "xl"] as const;
                  const idx = sizes.indexOf(accessibility.fontSize);
                  if (idx > 0)
                    dispatch({ type: "SET_FONT_SIZE", size: sizes[idx - 1] });
                }}
                aria-label="Diminuir fonte"
                disabled={accessibility.fontSize === "sm"}
                className="flex-1"
              >
                <ZoomOut className="size-4 mr-1" />
                Diminuir
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const sizes = ["sm", "md", "lg", "xl"] as const;
                  const idx = sizes.indexOf(accessibility.fontSize);
                  if (idx < sizes.length - 1)
                    dispatch({ type: "SET_FONT_SIZE", size: sizes[idx + 1] });
                }}
                aria-label="Aumentar fonte"
                disabled={accessibility.fontSize === "xl"}
                className="flex-1"
              >
                <ZoomIn className="size-4 mr-1" />
                Aumentar
              </Button>
            </div>
          </div>

          <Separator />

          {/* High contrast */}
          <div className="flex items-center justify-between">
            <Label
              htmlFor="high-contrast"
              className="flex items-center gap-2 cursor-pointer"
            >
              <Eye className="size-4" />
              <div>
                <p className="text-sm font-medium">Alto contraste</p>
                <p className="text-xs text-muted-foreground">
                  Aumenta o contraste das cores
                </p>
              </div>
            </Label>
            <Switch
              id="high-contrast"
              checked={accessibility.highContrast}
              onCheckedChange={() => dispatch({ type: "TOGGLE_HIGH_CONTRAST" })}
            />
          </div>

          <Separator />

          {/* Reduced motion */}
          <div className="flex items-center justify-between">
            <Label
              htmlFor="reduced-motion"
              className="flex items-center gap-2 cursor-pointer"
            >
              <Volume2 className="size-4" />
              <div>
                <p className="text-sm font-medium">Reduzir animações</p>
                <p className="text-xs text-muted-foreground">
                  Desativa transições e efeitos
                </p>
              </div>
            </Label>
            <Switch
              id="reduced-motion"
              checked={accessibility.reducedMotion}
              onCheckedChange={() =>
                dispatch({ type: "TOGGLE_REDUCED_MOTION" })
              }
            />
          </div>

          <Separator />

          {/* Simplified reading */}
          <div className="flex items-center justify-between">
            <Label
              htmlFor="simplified-reading"
              className="flex items-center gap-2 cursor-pointer"
            >
              <Type className="size-4" />
              <div>
                <p className="text-sm font-medium">Leitura simplificada</p>
                <p className="text-xs text-muted-foreground">
                  Aumenta o espaçamento entre letras e linhas
                </p>
              </div>
            </Label>
            <Switch
              id="simplified-reading"
              checked={accessibility.simplifiedReading}
              onCheckedChange={() =>
                dispatch({ type: "TOGGLE_SIMPLIFIED_READING" })
              }
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
