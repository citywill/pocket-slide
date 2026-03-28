import { Route, Navigate } from 'react-router-dom';
import { MainLayout } from '@/components/layout';
import ExampleIndex from './example/Index';

export const routes = (
  <>
    <Route path="/" element={<MainLayout showFooter={false} />}>
      <Route path="slides" element={<Navigate to="/slides/example" replace />} />
      <Route path="slides/example" element={<ExampleIndex />} />
    </Route>
  </>
);
