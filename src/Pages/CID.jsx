import { useParams } from 'react-router-dom';
import CIDViewer from '../Components/CIDViewer.jsx';

export default function CID(){
  const { cid } = useParams();
  return (
    <div className="container py-4">
      <CIDViewer initialCid={cid || ''} />
    </div>
  );
}
