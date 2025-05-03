export const createScrollFunction = (refs) => {
    return {
        scrollToService: () => refs.serviceRef?.current?.scrollIntoView({ behavior: "smooth" }),
        scrollToAbout: () => refs.aboutRef?.current?.scrollIntoView({ behavior: "smooth" }),
        scrollToContact: () => refs.contactRef?.current?.scrollIntoView({ behavior: "smooth" }),
        scrollToTop: () => window.scrollTo({ top: 0, behavior: "smooth" })
    }
}

export const handleHomeClick = (pathname) => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };