export interface OrdersObj {
  id: string;
  item: string;
  event_name: string;
  customer: string;
  destination: string;
  sent_at_second: string;
  price: string;
  values?: (price: string|number[]) => void
}