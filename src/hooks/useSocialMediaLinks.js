import { useStore } from "@app/store/index"
import { Instagram, Phone, Mail, GitHub, Linkedin } from "react-feather"
function useSocialMediaLinks() {
  const { email, instagram, github, twitter, linkedin, phoneNumber } =
    useStore()

  const links = [
    {
      title: email,
      Icon: Mail,
      href: `mailto:${email}`,
    },
    {
      title: phoneNumber,
      Icon: Phone,
      href: `tel:${phoneNumber}`,
    },
    {
      title: "yashraj.dev",
      Icon: Instagram,
      href: instagram,
    },
    {
      title: "yashrajb",
      Icon: GitHub,
      href: github,
    },
    {
      title: "yashrajbasan",
      Icon: Linkedin,
      href: linkedin,
    },
  ]

  return links
}

export default useSocialMediaLinks
