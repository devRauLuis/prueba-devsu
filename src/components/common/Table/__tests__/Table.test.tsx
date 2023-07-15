import { render, screen } from '@testing-library/react';
import Table from '../Table';
import ColProps from '@/models/ColProps';

// Mock data for testing
const mockData = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

// Mock columns for testing
const mockColumns: ColProps<any>[] = [
  { header: 'ID', field: 'id' },
  { header: 'Name', field: 'name' },
];

test('renders without crashing', () => {
  render(<Table data={mockData} columns={mockColumns} />);
});

test('renders correct number of rows', () => {
  render(<Table data={mockData} columns={mockColumns} />);
  const rows = screen.getAllByRole('row');
  // +1 for the header row
  expect(rows.length).toBe(mockData.length + 1);
});

test('renders correct headers', () => {
  render(<Table data={mockData} columns={mockColumns} />);
  mockColumns.forEach((col) => {
    const header = screen.getByText(col.header);
    expect(header).toBeInTheDocument();
  });
});

test('renders "No records found" when data is empty', () => {
  render(<Table data={[]} columns={mockColumns} />);
  const noRecords = screen.getByText('No records found');
  expect(noRecords).toBeInTheDocument();
});

test('renders loading overlay when loading is true', () => {
  render(<Table data={mockData} columns={mockColumns} loading={true} />);
  const loadingOverlay = screen.getByText(/loading/i);
  expect(loadingOverlay).toBeInTheDocument();
});
