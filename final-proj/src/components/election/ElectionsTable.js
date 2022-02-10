import { ElectionRow } from './ElectionRow';
import './index.css'

export const ElectionsTable = (props) => {
    const { elections,shouldDisplayResults,selectElectionId } = props;
    return (
        <table className='elections-table'>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {elections.map(el => {
                    return (
                        <ElectionRow
                            key={el.id}
                            election={el}
                            shouldDisplayResults={shouldDisplayResults}
                            selectElectionId={selectElectionId}
                        />
                    )
                })}
            </tbody>
        </table>
    )
}