import { Footer } from 'flowbite-react'

export default function Foot() {
  return (
    <div className="absolute bottom-0 left-1/2 w-full max-w-[1240px] -translate-x-1/2">
      <Footer container>
        <Footer.Copyright href="#" by="OpenTable™" year={2024} />
        <Footer.LinkGroup>
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Licensing</Footer.Link>
          <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </div>
  )
}
