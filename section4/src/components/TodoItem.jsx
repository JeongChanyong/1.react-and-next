import './TodoItem.css';

export default function TodoItem({ id, isDone, createDate, content }) {
  return (
    <div className="TodoItem">
      <input type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{createDate}</div>
      <button>삭제</button>
    </div>
  );
}
