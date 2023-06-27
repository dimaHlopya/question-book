import { LABELS_QUERY_KEY } from '@constants/questionLabels';
import { type LabelProps, type LabelQuery } from '@customTypes/questionsLabels';
import { fetchLabels } from '@services/questionLabels';

export const labelsQuery = ({ questionsCategory }: LabelProps): LabelQuery => ({
  queryKey: [LABELS_QUERY_KEY],
  queryFn: async () => await fetchLabels(questionsCategory),
});
