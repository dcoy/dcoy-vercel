export default function Page() {
  return (
    <div className={`flex flex-col justify-center items-center mx-10 my-10`}>
        <h1 className={`mb-3 text-2xl font-semibold`}>
        Describe how you solved a challenge that one of your previous teams faced. How did you determine your solution was successful?{" "}
      </h1>
      <div className={`flex-wrap items-center py-5`}>
        <div className={`flex-1`}>
          <div>
            <p>
              At a previous employer, I supported content authors by processing their requirements documentation, to build hands-on labs for their students. We invested heavily into the AWS ecosystem, making use of CloudFormation templates (referred to as CF templates going forward). 
            </p>
          </div>
          <div>
            <p>
              At the time, CF templates were lengthy, written in JSON (their approach), and challenging to debug when an issue occurred during staging. The approach was to write the templates, deploy to our staging environment, test<em>manually</em>, then deploy to our production environment. Overall, this was a time consuming process that resulted in a 2-week turnaround. Whenever a vulernability was announced, a security patch was needed, increasing the deliverable even <em>further</em> to account for the full manual process to patch.
            </p>
          </div>
          <div>
            <p>
              As a solution, I proposed utilizing Terraform to write the infrastructure and Packer to declare the state of the AMIs, automating this in a CI/CD pipeline, with integrated security scanning using <code className={`bg-slate-700`}>tfsec</code>. This process cut the devliverable time down 4 days, a 73% time savings.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}