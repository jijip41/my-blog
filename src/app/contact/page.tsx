import ContactForm from "@/components/ContactForm";
import SocialMedia from "@/components/SocialMedia";

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center gap-y-8 p-4">
      <ContactForm />
      <SocialMedia />
    </section>
  );
}
