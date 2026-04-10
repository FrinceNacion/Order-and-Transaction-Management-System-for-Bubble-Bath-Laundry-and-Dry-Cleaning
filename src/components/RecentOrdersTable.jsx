
function RecentOrdersTable({ className, orders }) {
  return (
    <div style={{ minWidth: 200, flex: '1 1 200px' }} className={`card border-0 shadow-sm rounded-3 p-4 ${className}`}>
      <h6 className="fw-semibold mb-3">Recent Orders</h6>
      {orders.map((order, index) => (
        <div key={index} className={`d-flex justify-content-between align-items-center py-3 ${index < orders.length - 1 ? 'border-bottom' : ''}`}>
          <div>
            <div className="fw-semibold mb-1">{order.customer}</div>
            <div className="small text-secondary">Order #{order.id}</div>
          </div>
          <div className="text-end">
            <div className="fw-semibold">PHP {order.amount.toFixed(2)}</div>
            <span className={`badge bg-${order.status === 'pending' ? 'secondary' : order.status === 'claimed' ? 'warning text-dark' : order.status === 'in-progress' ? 'info' : 'success'} text-capitalize`}>{order.status}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentOrdersTable;