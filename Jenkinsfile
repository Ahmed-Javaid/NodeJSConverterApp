pipeline { 
    agent any 

    environment {
        APP_VERSION = "1.0.${BUILD_NUMBER}"
    }

    stages { 
        stage('Checkout Code') { 
            steps {
                echo "Cloning the repository..."
                checkout scm 
            }
        }

        stage('Install Dependencies') { 
            steps {
                bat 'npm install'
            }
        }

        stage('Run Linting and Tests') { 
            steps {
                // c. Run linting and tests
                bat 'npm test' 
            }
        }

        stage('Archive Artifact') { 
            steps {
                // d. Archive the build output as an artifact (.zip or .tar file)
                echo "Archiving artifact for version ${APP_VERSION}..."
                
                // Create build directory and copy files necessary for zipping
                bat 'if not exist build mkdir build'
                bat 'copy controllers\\converter.js build\\' 
                
                // Use PowerShell to create the zip artifact
                bat "powershell Compress-Archive -Path build\\* -DestinationPath build_v${APP_VERSION}.zip"
                
                // Archive the artifact 
                archiveArtifacts artifacts: "build_v${APP_VERSION}.zip", fingerprint: true
            }
        }
    }

    post { 
        // e. Send an email notification on build success or failure (Simulated)
        success { 
            echo 'Email sent to i222530@nu.edu.pk' 
        }
        failure { 
            echo 'Email sent to i222530@nu.edu.pk' 
        }
    }
}
