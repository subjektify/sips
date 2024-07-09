import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

export interface Sip {
    id: string;
    title: string;
    author: string;
    status: string;
    type: string;
}

export interface SipsProps {
    sips?: Sip[];
}

export default function Sips({ sips }: SipsProps): JSX.Element {

    const statusMap = {
        'Draft': <span className="badge badge--secondary">Draft</span>,
        'Review': <span className="badge badge--primary">Review</span>,
        'Living': <span className="badge badge--success">Living</span>,
        'Withdrawn': <span className="badge badge--warning">Withdrawn</span>,
        'Final': <span className="badge badge--success">Final</span>,
        'Last Call': <span className="badge badge--warning">Last Call</span>,
        'Stagnant': <span className="badge badge--danger">Stagnant</span>,
    };

    return (
        <Layout
            title={`Core`}
            description="Subjektify Improvement Proposals">
            <main>
                <section className={styles.sips}>
                    <div className="container">
                        <div className="row">
                            {sips?.map((sip) => (
                                <div key={sip.id} className="card-demo">
                                    <div className="card">
                                        <div className="card__header">
                                            <strong className='margin-right--sm'>{`SIP-${sip.id}`}</strong>
                                            {statusMap[sip.status]}
                                            <h3 className='margin-bottom--none'>{sip.title}</h3>
                                            <p>{sip.author}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}
