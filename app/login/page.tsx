import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Lock , Mail } from "lucide-react";
import Link from "next/link";
export default function LogIn() {
  return (
    <div className="container mt-50 md:w-100 w-[80vw] mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-bold text-center">
            تسجيل الدخول
          </CardTitle>
        </CardHeader>
        <CardContent>
          <label>البريد الإلكتروني</label>
          <CardFooter className="flex-col">
          <div className="relative md:w-86 w-[66vw] ">
            <Input className="my-4 mx-0" />
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-dark-200" />{" "}
          </div>
        </CardFooter>
        </CardContent>
        <CardFooter className="flex-col">
          <label className="">كلمة السر</label>
          <div className="relative md:w-86 w-[66vw] ">
            <Input className="my-4 " />
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-dark-200" />
          </div>
        </CardFooter>
        <CardDescription className="mr-6 flex">
          <div>اليس لديك حساب؟</div>
          <Link
            className="mr-2 text-white/75 underline hover:font-bold hover:text-white/100"
            href={"/register"}
          >
            أنشئ حساباً
          </Link>
        </CardDescription>
      </Card>
    </div>
  );
}
