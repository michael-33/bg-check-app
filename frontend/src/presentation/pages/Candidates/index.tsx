import { useCandidatesPage } from "./hooks";

export function CandidatesPage() {
  const {
    candidates,
    fetchStatus,
    search,
    setSearch,
    sortByCreationDate,
    filterCandidates,
    hasCandidates,
  } = useCandidatesPage();

  return (
    <div className="candidates-container">
      {fetchStatus === "error" ? (
        <div>Error fetching candidates</div>
      ) : fetchStatus === "loading" ? (
        <div>Loading...</div>
      ) : hasCandidates ? (
        <>
          <div className="search-section">
            <input
              type="text"
              placeholder="Search by name or keywords"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
            <button onClick={filterCandidates} className="search-button">
              Search
            </button>
            <button onClick={sortByCreationDate} className="sort-button">
              Sort by creation date
            </button>
          </div>
          <div className="candidates-list">
            {candidates.map((candidate) => (
              <div key={candidate.id} className="candidate-card">
                <h2>{candidate.name}</h2>
                <p className="email">Email: {candidate.email}</p>
                <div className="summary">
                  <h3>Summary</h3>
                  <p>{candidate.summary}</p>
                </div>
                <div className="external-data">
                  <h3>External Data</h3>
                  <p>{candidate.extData}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>No candidates found</div>
      )}
    </div>
  );
}
