import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export default function ContactPage() {
  return (
    <section className="academic-pattern min-h-[56vh] py-20">
      <Container>
        <div className="rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-academic backdrop-blur sm:p-12">
          <SectionHeading
            eyebrow="QUANTRA Education"
            title="Contact"
            description="Placeholder content for the contact page. Full academic copy, programme details, and calls to action will be developed in the next phase."
          />
        </div>
      </Container>
    </section>
  );
}
