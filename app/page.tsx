import { Nav } from "@/components/anafi/nav"
import { Hero } from "@/components/anafi/hero"
import { About } from "@/components/anafi/about"
import { Services } from "@/components/anafi/services"
import { WhyAnafi } from "@/components/anafi/why-anafi"
// TrustedBy intentionally omitted — reinstate once real client logos are available.
// import { TrustedBy } from "@/components/anafi/trusted-by"
import { Approach } from "@/components/anafi/approach"
import { Contact } from "@/components/anafi/contact"
import { Footer } from "@/components/anafi/footer"

export default function Page() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Services />
      <WhyAnafi />
      <Approach />
      <Contact />
      <Footer />
    </main>
  )
}
