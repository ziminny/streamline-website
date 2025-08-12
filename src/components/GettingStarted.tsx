import { CodeBlock } from './CodeBlock';
import { Translation } from '@/lib/i18n';

interface GettingStartedProps {
  translation: Translation;
}

export function GettingStarted({ translation }: GettingStartedProps) {
  const configureUrlCode = `APIConfiguration.shared.application(
    urlConfigs.baseURL,
    urlConfigs.port,
    "iOS",
    .ptBR
)`;

  const apiPathsCode = `enum ApiPath {
    case defaultPath(Paths)
}

enum Paths: String, Sendable {
    case tasks = "Tasks"
}

extension ApiPath: RawValue {
    public var rawValue: String {
        switch self {
        case .defaultPath(let subcase):
            return subcase.rawValue
        }
    }
}`;

  const modelsCode = `struct RequestModel: Model {
    let id: Int
    let name: String
}

struct ResponseModel: Model {
    let id: String
    let author: String
    let title: String
    let description: String
}`;

  const requestCode = `final class TestRequest: ServiceProtocol {
    
    nonisolated(unsafe) private(set) var factory: HTTPServiceFactoryProtocol
    
    required init(withFactory factory: HTTPServiceFactoryProtocol) {
        self.factory = factory
    }
    
    func testRequest() async throws -> [ResponseModel] {
        return try await factory
            .makeHttpService()
            .fetchAsync(
                [ResponseModel].self,
                parameters: Parameters(
                    method: .GET,
                    path: ApiPath.defaultPath(.tasks)
                )
            ) ?? []
    }
}`;

  const swiftuiCode = `class ViewModel: ObservableObject {
    
    @Factory var service: TestRequest
    
    func test() {
        Task {
            do {
                let result = try await service.testRequest()
                print(result)
            } catch {
                print(error)
            }
        }
    }
}`;

  return (
    <section id="getting-started" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {translation.gettingStarted.title}
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Step 1 */}
          <div className="animate-fade-up">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              {translation.gettingStarted.configureUrl}
            </h3>
            <p className="text-muted-foreground mb-6">
              When starting your application, configure the base URL:
            </p>
            <CodeBlock code={configureUrlCode} />
            <p className="text-sm text-muted-foreground mt-2">
              💡 You can change the base URL later for requests to other domains.
            </p>
          </div>

          {/* Step 2 */}
          <div className="animate-fade-up">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              {translation.gettingStarted.configurePaths}
            </h3>
            <CodeBlock code={apiPathsCode} />
          </div>

          {/* Step 3 */}
          <div className="animate-fade-up">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              {translation.gettingStarted.defineModels}
            </h3>
            <CodeBlock code={modelsCode} />
          </div>

          {/* Step 4 */}
          <div className="animate-fade-up">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              {translation.gettingStarted.createRequest}
            </h3>
            <CodeBlock code={requestCode} />
          </div>

          {/* Step 5 */}
          <div className="animate-fade-up">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              {translation.gettingStarted.swiftuiIntegration}
            </h3>
            <p className="text-muted-foreground mb-6">
              If you are using SwiftUI, you can inject services directly:
            </p>
            <CodeBlock code={swiftuiCode} />
            <p className="text-sm text-muted-foreground mt-2">
              Closures are also supported.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}