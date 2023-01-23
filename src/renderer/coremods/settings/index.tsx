import { Divider, Header, Section, insertSections, settingsTools } from "./lib";
import { General, Plugins, QuickCSS, Themes } from "./pages";

export { insertSections };

export function start(): void {
  settingsTools.addAfter("Billing", [
    Divider(),
    Header("Replugged"),
    Section({
      name: "rp-general",
      label: "General",
      elem: General,
    }),
    Section({
      name: "rp-quickcss",
      label: "Quick CSS",
      elem: QuickCSS,
    }),
    Section({
      name: "rp-plugins",
      label: "Plugins",
      elem: Plugins,
    }),
    Section({
      name: "rp-themes",
      label: "Themes",
      elem: Themes,
    }),
  ]);
}

export function stop(): void {
  settingsTools.removeAfter("Billing");
}
