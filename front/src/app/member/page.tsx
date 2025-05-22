import { RegisterButton } from "@/features/registerButton";

export default function Member() {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold">会員</h2>
      <RegisterButton />
    </div>
  );
}
