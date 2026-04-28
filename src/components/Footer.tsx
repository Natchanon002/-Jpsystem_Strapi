import Link from "next/link";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <Container>
        <div className="flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs font-medium text-slate-600">
            Copyright ©Japan System Co., Ltd.& Japan System (Thailand) Co., Ltd. All rights Reserved.
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold text-slate-700">
            <Link className="hover:text-slate-900" href="/company-profile">
              Company Profile
            </Link>
            <Link className="hover:text-slate-900" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

