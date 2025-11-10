import { Anchor } from "@aristobyte-ui/anchor";
import { Icons } from "@aristobyte-ui/utils";
import {
  WebsiteLink,
  DocumentationLink,
  PackagesLink,
  Gradient,
  Label,
} from "./components";

export default function App() {
  return (
    <div className="flex flex-col place-content-center h-[100svh] place-items-center gap-8 px-5 sm:px-10 md:px-20 py-5 sm:py-10 md:py-20 font-sans">
      <Gradient />
      <main className="flex flex-col row-start-2 items-start">
        <div className="text-left mb-4 md:mb-8">
          <span className="flex w-22 h-22 md:w-44 md:h-44">
            <Icons.AristoByteUI size="100%" />
          </span>

          <h1 className="mt-2 mb-2 text-4xl md:text-6xl font-semibold font-righteous text-gray-200">
            AristoByte UI
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-righteous bg-clip-text text-transparent bg-[linear-gradient(90deg,#ffee27,#e2312d)]">
            Smart. Scalable. Seamless.
          </h2>
        </div>

        <ul className="mb-6 list-inside leading-6 font-mono space-y-1 md:space-y-2 text-gray-400 text-xs sm:text-base text-left">
          <li>
            Get started by editing
            <span className="ml-2">
              <Label />
            </span>
          </li>
          <li>Save and see your changes instantly</li>
        </ul>

        <div className="flex flex-wrap md:flex-nowrap items-center gap-4">
          <DocumentationLink />
          <PackagesLink />
          <WebsiteLink />
        </div>
      </main>

      <footer className="row-start-3 flex flex-wrap md:flex-nowrap  items-center justify-center gap-6">
        <Anchor
          href="https://www.instagram.com/aristo_byte"
          target="_blank"
          className="flex items-center gap-2"
        >
          <Icons.Instagram size={24} color="#f18e35" />
          Instagram
        </Anchor>
        <Anchor
          href="https://www.linkedin.com/company/aristobyte"
          target="_blank"
          className="flex items-center gap-2"
        >
          <Icons.LinkedIn size={24} color="#e95f32" />
          LinkedIn
        </Anchor>
        <Anchor
          href="https://github.com/aristobyte-team"
          target="_blank"
          className="flex items-center gap-2"
        >
          <Icons.Github size={24} color="#e2312d" />
          GitHub
        </Anchor>
      </footer>
    </div>
  );
}
