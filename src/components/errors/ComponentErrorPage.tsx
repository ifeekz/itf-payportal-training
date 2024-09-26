import { Button } from '@/components/ui/button'
import ErrorPageLayout from '@/components/layouts/ErrorPageLayout'
import { Link } from 'react-router-dom'

export default function ComponentErrorPage() {
    function relaunch() {
        window.location.reload();
    }
    
    return (
        <ErrorPageLayout
            title="We're fixing it"
            description={
                <>
                    This component is currently experiencing technical issues.
                    <br />
                    We know about it and we&aposre working on it.
                </>
            }
            actions={
                <>
                    <Button size="lg" variant="ghost" onClick={relaunch}>
                        Relaunch app
                    </Button>
                    <Button size="lg" asChild>
                        <Link to={'/'} reloadDocument={true}>
                            Go home
                        </Link>
                    </Button>
                </>
            }
        />
    )
}