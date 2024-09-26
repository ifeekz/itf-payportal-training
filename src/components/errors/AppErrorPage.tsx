import { Button } from '@/components/ui/button'
import ErrorPageLayout from '@/components/layouts/ErrorPageLayout'

export default function AppErrorPage() {
    function relaunch () {
        window.location.reload();
    }

    return (
        <ErrorPageLayout
            title="We're fixing it"
            description={
                <>
                    The app encountered an error and needs to be restarted.
                    <br />
                    We know about it and we&apos;re working to fix it.
                </>
            }
            actions={
                <Button size="lg" onClick={relaunch}>
                    Relaunch app
                </Button>
            }
        />
    )
}