pipeline { 
    agent any 

    environment {
        // Define a versioning variable using the built-in BUILD_NUMBER for artifact naming
        APP_VERSION = "1.0.${BUILD_NUMBER}"
    }

    stages { 
        stage('Checkout Code') { 
            steps {
                // a. Clone the GitHub repository [cite: 52]
                echo "Cloning the repository..."
                checkout scm 
            }
        }

        stage('Install Dependencies') { 
            steps {
                // b. Install dependencies [cite: 53]
                bat 'npm install'
            }
        }

        stage('Run Linting and Tests') { 
            steps {
                // c. Run linting and tests [cite: 54]
                bat 'npm test' 
                
                // Simulate linting: The task does not provide a specific command, 
                // so we use a simulation echo.
                bat 'echo Running linting simulation...' 
            }
        }

        stage('Archive Artifact') { 
            steps {
                // d. Archive the build output as an artifact (.zip or .tar file) [cite: 55]
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
        // e. Send an email notification on build success or failure (Simulated) [cite: 56]
        success { 
            echo 'Email sent to team@example.com' // Simulating notification [cite: 57]
        }
        failure { 
            echo 'Email sent to team@example.com' // Simulating notification [cite: 57]
        }
    }
}
