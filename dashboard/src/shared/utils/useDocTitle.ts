import { useDocumentTitle } from "@mantine/hooks";

export const useDocTitle = (title: string) => {
  useDocumentTitle(`${title} - Vacaly`);
};
