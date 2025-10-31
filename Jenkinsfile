pipeline {
    agent any // Use any available agent

    stages {
        // Stage 1: Checkout Code
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        // Stage 2: Install Dependencies
        stage('Install Dependencies') {
            steps {
                bat 'npm install' 
            }
        }

        // Stage 3: Parallel Test Execution 
        stage('Parallel Test Execution') {
            parallel {
                // Job 1: Unit Tests
                stage('Unit Tests') {
                    steps {
                        bat 'npm test'
                    }
                }
                // Job 2: Linting (Simulated) 
                stage('Linting') {
                    steps {
                        echo "Lint passed"
                    }
                }
            }
        }

        // Stage 4: Conditional Deployment Simulation 
        stage('Conditional Deployment') {
            steps {
                script {
                    // Check the current branch name (provided by Jenkins as env.BRANCH_NAME)
                    if (env.BRANCH_NAME == 'main') { 
                        echo "Deployed to Production Environment (main branch)"
                    } else if (env.BRANCH_NAME == 'dev') { 
                        echo "Deployed to Staging Environment (dev branch)"
                    } else { 
                        echo "Feature branch detected - Deployment Skipped."
                    }
                }
            }
        }

        // Stage 5: Archive Artifacts
        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: 'package.json', fingerprint: true
            }
        }
    } // End of stages

    // Post-build actions run after all stages
    post {
        // Stage 6: Notification
        success {
            script {
                def timestamp = new Date().format("yyyy-MM-dd HH:mm:ss")
                echo "Build #${env.BUILD_NUMBER} on branch ${env.BRANCH_NAME} completed successfully at ${timestamp}"
            }
        }
        failure {
            echo "Build #${env.BUILD_NUMBER} on branch ${env.BRANCH_NAME} FAILED."
        }
    }
}
