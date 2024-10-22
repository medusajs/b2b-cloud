import { Metadata } from "next"

import { getBaseURL } from "@lib/util/env"
import { ArrowUpRightMini, ExclamationCircleSolid } from "@medusajs/icons"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Footer from "@modules/layout/templates/footer"
import { NavigationHeader } from "@modules/layout/templates/nav"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <NavigationHeader />
      <div className="flex items-center text-neutral-50 justify-center small:p-4 p-2 text-center bg-neutral-900 small:gap-2 gap-1 text-sm">
        <div className="flex flex-col small:flex-row small:gap-2 gap-1 items-center">
          <span className="flex items-center gap-1">
            <ExclamationCircleSolid className="inline" color="#A1A1AA" />
            Favorites at a great price! For a limited time only
          </span>
          <span className="hidden small:inline">·</span>

          <LocalizedClientLink
            className="group hover:text-ui-fg-interactive-hover text-ui-fg-interactive self-end small:self-auto"
            href="/"
          >
            Go to Products
            <ArrowUpRightMini className="group-hover:text-ui-fg-interactive-hover inline text-ui-fg-interactive" />
          </LocalizedClientLink>
        </div>
      </div>
      {props.children}
      <Footer />
    </>
  )
}
