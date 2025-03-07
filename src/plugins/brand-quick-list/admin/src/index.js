import pluginId from "../pluginId";
import BrandList from "./pages/BrandList";

export default {
    register(app) {
        app.addMenuLink({
            to: `/plugins/${pluginId}`,
            icon: 'folder',
            intlLabel: {
                id: `${pluginId}.plugin.name`,
                defaultMessage: 'Brand Quick List'
            },
            Component: BrandList,
        });
    },
    bootstrap() {},
}