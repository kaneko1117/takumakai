import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcn/dropdown-menu";
import { Menu } from "lucide-react";

export function DropMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Menu className="h-11 w-11 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>対戦記録</DropdownMenuItem>
          <DropdownMenuItem>各メンバー成績</DropdownMenuItem>
          <DropdownMenuItem>メンバー一覧</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
