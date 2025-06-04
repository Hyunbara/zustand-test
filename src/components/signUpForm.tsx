import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function SignupForm() {
  const form = useForm();

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-md rounded-2xl border border-[#E5E7EB] bg-white px-8 py-12 shadow-sm">
        <div className="flex flex-col items-center mb-8">
          <span
            className="text-4xl font-extrabold tracking-widest mb-2"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            WINE
          </span>
        </div>
        <Form {...form}>
          <form className="space-y-5">
            <FormField
              name="email"
              render={() => (
                <FormItem>
                  <FormLabel className="text-base font-normal mb-1">
                    이메일
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="whyne@email.com"
                      className="rounded-xl border border-[#CBD5E1] bg-[#F9FAFB] px-4 py-3 text-base placeholder:text-[#A0AEC0] focus:border-[#7C3AED] focus:ring-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="nickname"
              render={() => (
                <FormItem>
                  <FormLabel className="text-base font-normal mb-1">
                    닉네임
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="whyne"
                      className="rounded-xl border border-[#CBD5E1] bg-[#F9FAFB] px-4 py-3 text-base placeholder:text-[#A0AEC0] focus:border-[#7C3AED] focus:ring-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              render={() => (
                <FormItem>
                  <FormLabel className="text-base font-normal mb-1">
                    비밀번호
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="영문, 숫자, 특수문자(!@#$%^&*) 제한"
                      className="rounded-xl border border-[#CBD5E1] bg-[#F9FAFB] px-4 py-3 text-base placeholder:text-[#A0AEC0] focus:border-[#7C3AED] focus:ring-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="passwordConfirm"
              render={() => (
                <FormItem>
                  <FormLabel className="text-base font-normal mb-1">
                    비밀번호 확인
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="비밀번호 확인"
                      className="rounded-xl border border-[#CBD5E1] bg-[#F9FAFB] px-4 py-3 text-base placeholder:text-[#A0AEC0] focus:border-[#7C3AED] focus:ring-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full mt-4 rounded-xl bg-[#7C3AED] text-white text-lg font-semibold py-3 hover:bg-[#6D28D9] transition"
            >
              가입하기
            </Button>
          </form>
        </Form>
        <div className="mt-8 text-center text-sm text-[#A0AEC0]">
          계정이 이미 있으신가요?{" "}
          <a
            href="/login"
            className="text-[#7C3AED] underline font-medium hover:text-[#6D28D9]"
          >
            로그인하기
          </a>
        </div>
      </div>
    </div>
  );
}
