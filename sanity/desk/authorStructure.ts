import { ListItemBuilder } from "sanity/structure";
import defineStructure from "../../utils/defineStructure";

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title("Author")
    .schemaType("author")
    .child(S.documentTypeList("author"))
);
