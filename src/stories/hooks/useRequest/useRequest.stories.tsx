import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useRequest } from '@hooks/useRequest';
import { Button } from '@components/Button';

const mockSuccessRequest = () => new Promise((resolve) => setTimeout(() => resolve({ data: 'Successful response!' }), 1000));
const mockErrorRequest = () => new Promise((_, reject) => setTimeout(() => reject(new Error('Request failed!')), 1000));

const RequestDemo = ({ requestFunc }: { requestFunc: () => Promise<any> }) => {
  const { doRequest, data, setData, error, setError, isLoading } = useRequest(requestFunc, {
    onSuccess: (data) => action('Request succeeded')(data),
    onError: (error) => action('Request failed')(error),
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button onClick={doRequest} isLoading={isLoading}>Trigger Request</Button>
        <Button onClick={() => {setData(null); setError(null)}} disabled={!data && !error}>Reset Data</Button>
      </div>
      <div style={{color: 'white'}}>
        {data && <pre>✅ Data: {JSON.stringify(data, null, 2)}</pre>}
        {error && <p>❌ Error: {error.message}</p>}
      </div>
    </div>
  );
};

const codeString = `
const mockSuccessRequest = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ data: 'Successful response!' }), 1000)
  );

const RequestDemo = ({ requestFunc }) => {
  const { doRequest, data, setData, error, setError, isLoading } = useRequest(requestFunc, {
    onSuccess: (data) => action('Request succeeded')(data),
    onError: (error) => action('Request failed')(error),
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button onClick={doRequest} isLoading={isLoading}>Trigger Request</Button>
        <Button onClick={() => {setData(null); setError(null)}} disabled={!data && !error}>Reset Data</Button>
      </div>
      <div style={{ color: 'white' }}>
        {data && <pre>✅ Data: {JSON.stringify(data, null, 2)}</pre>}
        {error && <p>❌ Error: {error.message}</p>}
      </div>
    </div>
  );
};
`.trim();

const meta: Meta<typeof useRequest> = {
  title: 'Hooks/useRequest',
  component: null,
  render: () => null,
  parameters: {
    docs: {
      source: {
        code: codeString,
      }
    },
  },
} satisfies Meta<typeof useRequest>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  render: () => <RequestDemo requestFunc={mockSuccessRequest} />
};

export const Error: Story = {
  render: () => <RequestDemo requestFunc={mockErrorRequest} />
};

