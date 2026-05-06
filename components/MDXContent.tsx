import { MDXRemote } from 'next-mdx-remote/rsc';
import AffiliateButton, { AffiliateButtonGroup } from './AffiliateButton';
import VersusTable from './VersusTable';

const components = {
  AffiliateButton,
  AffiliateButtonGroup,
  VersusTable,
};

interface MDXContentProps {
  source: string;
}

export default function MDXContent({ source }: MDXContentProps) {
  return <MDXRemote source={source} components={components} />;
}
