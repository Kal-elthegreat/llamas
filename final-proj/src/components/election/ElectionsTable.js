import { ElectionRow } from './ElectionRow';
import './index.css'

export const ElectionsTable = (props) => {
    const { data, viewRow } = props;
    return (
        <table className='elections-table'>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {data.map(el => {
                    return (
                        <ElectionRow
                            key={el.id}
                            election={el}
                            viewRow={viewRow}
                        />
                    )
                })}
            </tbody>
        </table>
    )
}